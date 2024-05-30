import { useState } from "react";
import EventContext from "./Eventcontext";
import jwtEncode from 'jwt-encode'
import { showAlert } from "../components/alert/Alert";
import { useNavigate } from "react-router-dom";
const JWT_SECRET = 'Abhiisgoodb@oy'


const Eventstate = (props) => {
  const host = "http://localhost:5000"
  const categoryInitial = []
  const sponserInitial = []
  const eventInitial = []

  const [users, setUsers] = useState()
  const [categorys, setCategorys] = useState(categoryInitial)
  const [sponseres, setSponseres] = useState(sponserInitial)
  const [events, setEvents] = useState(eventInitial)
  const navigate = useNavigate()

  // fetch all the user 

  const getuser = async () => {
    const response = await fetch(`${host}/api/user/getuser`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
    const json = await response.json()
    if (json.success) {
      setUsers(json.user)
      return json.user
    } else {
      alert('error!!please login')
    }
  }

  // update user's data 

  const updateuser = async (id, fname, lname, email, country, contactno, gender, detail, image) => {
    const response = await fetch(`${host}/api/user/updateuser/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "jwtData": localStorage.getItem('token')
      },
      body: JSON.stringify({ fname, lname, email, country, contactno, gender, detail, image })
    })
    const json = await response.json()
    console.log(json)
    let newuser = JSON.parse(JSON.stringify(users))
    for (let index = 0; index < newuser.length; index++) {
      const element = newuser[index];
      if (element._id === id) {
        element.firstname = fname
        element.lastname = lname
        element.email = email
        element.country = country
        element.contactno = contactno
        element.gender = gender
        element.detail = detail
        element.image = image
        break
      }
    }
    if (json.success) {
      console.log('hello')
      setUsers(newuser)
      navigate('/profile')
      showAlert('success', 'Profile updated successfully')
    } else {
      showAlert('error', json.error)
    }
  }

  // fetch all the category

  const getcategory = async () => {
    const response = await fetch(`${host}/api/event/category/fetchcategory`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "jwtData": localStorage.getItem('token')
      }
    })
    const json = await response.json()
    const catgjwtArray = []
    if (json.success) {
      json.category.forEach(category => {
        const jwt = jwtEncode(category._id, JWT_SECRET)
        catgjwtArray.push(jwt);
      })
      const catgjwtArrayString = JSON.stringify(catgjwtArray);
      localStorage.setItem('categoryData', catgjwtArrayString);
      setCategorys(json.category)
      return json.category
    }
    else {
      alert('Invalid Credentials')
    }

  }

  // Add a category

  const addcategory = async (categoryname, categorydescription) => {
    const response = await fetch(`${host}/api/event/category/addcategory`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "jwtData": localStorage.getItem('token')
      },
      body: JSON.stringify({ categoryname, categorydescription })
    });
    const json = await response.json();
    if (json.success) {
      const category = json.category
      setCategorys(categorys.concat(category))
      showAlert('success', 'Category Added Successfully!')
      navigate('event/category')
    }
    else {
      showAlert('error', json.error)
    }
  }

  // update category

  const editcategory = async (id, categoryname, categorydescription) => {
    const response = await fetch(`${host}/api/event/category/updatecategory/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "jwtData": localStorage.getItem('token'),
      },
      body: JSON.stringify({ categoryname, categorydescription })
    });
    const json = await response.json();
    console.log(json)
    console.log(json.category)
    let newCategory = JSON.parse(JSON.stringify(categorys))
    for (let index = 0; index < newCategory.length; index++) {
      const element = newCategory[index];
      if (element._id === id) {
        element.categoryname = categoryname
        element.categorydescription = categorydescription
        break
      }
    }
    if (json.success) {
      setCategorys(newCategory)
      showAlert('success', `Category Updated Successfully`)
    }
    else {
      showAlert('error', json.error)
    }
  }

  // Delete a category

  const deletecategory = async (id) => {
    const response = await fetch(`${host}/api/event/category/deletecategory/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "jwtData": localStorage.getItem('token')
      },
    });
    const json = response.json();
    console.log(json)
    const newCategory = categorys.filter((category) => { return category._id !== id })
    setCategorys(newCategory)
  }

  // Sponser
  // Fetch all the sponser

  const getsponser = async () => {
    const response = await fetch(`${host}/api/event/sponser/fetchsponser`, {
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        'jwtData': localStorage.getItem('token')
      }
    })
    const json = await response.json()

    const spnjwtArray = []
    if (json.success) {
      json.sponser.forEach(sponser => {
        const jwt = jwtEncode(sponser._id, JWT_SECRET)
        spnjwtArray.push(jwt);
      })
      const spnjwtArrayString = JSON.stringify(spnjwtArray);
      localStorage.setItem('sponserData', spnjwtArrayString);
      setSponseres(json.sponser)
      return json.sponser
    }
    else {
      showAlert('error', 'Invalid Credentials')
    }
  }

  // Add a Sponser

  const addsponser = async (sponserName, sponserDetail, sponserLogo) => {
    const response = await fetch(`${host}/api/event/sponser/addsponser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "jwtData": localStorage.getItem('token')
      },
      body: JSON.stringify({ sponserDetail, sponserLogo, sponserName })
    });
    const json = await response.json();
    if (json.success) {
      const sponser = json.sponserData
      setSponseres(sponseres.concat(sponser))
      showAlert('success', 'sponser added successfully')
      navigate('event/sponser')
    }
    else {
      showAlert('error', json.error)
    }
  }

  // update Sponser's data

  const editsponser = async (id, sponserName, sponserLogo, sponserDetail) => {
    const response = await fetch(`${host}/api/event/sponser/updatesponser/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "jwtData": localStorage.getItem('token')
      },
      body: JSON.stringify({ sponserName, sponserDetail, sponserLogo })
    });
    const json = await response.json();
    console.log(json)
    let newSponser = JSON.parse(JSON.stringify(sponseres))
    for (let index = 0; index < newSponser.length; index++) {
      const element = newSponser[index];
      if (element._id === id) {
        element.sponserLogo = sponserLogo
        element.sponserName = sponserName
        element.sponserDetail = sponserDetail
        break
      }
    }
    if (json.success) {
      setSponseres(newSponser)
      showAlert('success', `Sponser Updated Successfully`)
    }
    else {
      showAlert("error", json.error)
    }
  }

  // Delete a Sponser

  const deletesponser = async (id) => {
    const response = await fetch(`${host}/api/event/sponser/deletesponser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "jwtData": localStorage.getItem('token')
      },
    });
    const json = response.json();
    console.log(json)
    const newSponser = sponseres.filter((sponser) => { return sponser._id !== id })
    setSponseres(newSponser)
  }

  // Event

  // Fetch all the Event

  const getevent = async () => {
    const response = await fetch(`${host}/api/event/fetchevent`, {
      method: "GET",
      headers: {
        'Content-type': "application/json",
        "jwtData": localStorage.getItem('token'),
      }
    })
    const json = await response.json()
    if (json.success) {
      setEvents(json.event)
      return json.event
    }
    else {
      showAlert('error', 'please login')
    }
  }

  // Add a Event

  const addevent = async (name, detail, location, stdate, endate, contact, image, noticket, price) => {

    const requestBody = {
      eventName: name,
      eventDescription: detail,
      eventLocation: location,
      eventStDate: stdate,
      eventEndDate: endate,
      contact: contact,
      image: image,
      noOfTicket: noticket,
      totalPrice: price,
    };
    const response = await fetch(`${host}/api/event/addevent`, {
      method: "POST",
      headers: {
        'Content-type': "application/json",
        "jwtData": localStorage.getItem('token'),
        'categoryid': localStorage.getItem('categoryid'),
        'sponserid': localStorage.getItem('sponserid')
      },
      body: JSON.stringify(requestBody)
    })

    const json = await response.json()
    // console.log(json)
    if (json.success) {
      const event = json.saveEvent
      setEvents(events.concat(json.saveEvent))
      showAlert('success', 'event added successfully')
      navigate('/event')
    }
    else {
      showAlert('error', json.error)
    }
  }


  // Edit a Event

  const editevent = async (id, name, detail, location, stdate, endate, contact, image, noticket, price, category, sponser) => {
    const requestBody = {
      id: id,
      eventName: name,
      eventDescription: detail,
      eventLocation: location,
      eventStDate: stdate,
      eventEndDate: endate,
      contact: contact,
      image: image,
      noOfTicket: noticket,
      totalPrice: price
    }
    const response = await fetch(`${host}/api/event/updateevent/${id}`, {
      method: "PUT",
      headers: {
        'Content-type': "application/json",
        "jwtData": localStorage.getItem('token'),
        'categoryid': localStorage.getItem('categoryid'),
        'sponserid': localStorage.getItem('sponserid')
      },
      body: JSON.stringify(requestBody)
    })
    const json = response.json()

    let newEvent = JSON.parse(JSON.stringify(events))
    for (let index = 0; index < newEvent.length; index++) {
      const element = newEvent[index];
      if (element._id === id) {
        element.name = name
        element.detail = detail
        element.location = location
        element.stdate = stdate
        element.endate = endate
        element.image = image
        element.noticket = noticket
        element.price = price
        element.category = category
        element.sponser = sponser
        break
      }
    }
    if (json.success) {
      setEvents(newEvent)
      showAlert('success', 'Event Updated successfully')
    }
    else {
      showAlert('error', json.error)
    }
  }

  // Delete a Event

  const deletevent = async (id) => {
    const response = await fetch(`${host}/api/event/deleteevent/${id}`, {
      method: "DELETE",
      headers: {
        'Content-type': "application/json",
        "jwtData": localStorage.getItem('token'),
      }
    })
    const json = response.json()
    console.log(json)
    const newEvent = events.filter((event) => { return event._id !== id })
    setEvents(newEvent)
  }

  // upload event image

  const eventImage = async (id, image) => {
    const response = await fetch(`${host}/api/event/uploadeventimage/${id}`, {
      method: 'POST',
      headers: {
        'Content-type': "application/json",
        "jwtData": localStorage.getItem('token'),
      },
      body: JSON.stringify({
        base64: image
      })
    })
    const json = response.json()
    console.log(json)
  }

  // for calendar date

  const [selectDate, setSelectDate] = useState(null)
  const calendarDate = (date) => {
    setSelectDate(date)
  }
  return (
    <EventContext.Provider value={{ navigate, selectDate, calendarDate, users, getuser, updateuser, categorys, getcategory, addcategory, editcategory, deletecategory, sponseres, getsponser, addsponser, editsponser, deletesponser, events, getevent, addevent, editevent, deletevent, eventImage }}>
      {props.children}
    </EventContext.Provider>
  )
}

export default Eventstate
