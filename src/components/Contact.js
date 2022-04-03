import React from 'react'
import {} from 'bootstrap-react'
import {MapContainer, Marker, Popup,  TileLayer} from 'react-leaflet'

const Contact = ()=>{
    // Initialize and add the map
    
    return (
        <div className='border border-dark p-3 container'>
            <h2>Contact Me</h2>
            {
            //this is the form section
            }
            <div className='row border border-dark p-2 '>
                <div className='col-lg border border-dark p-3 m-2'>
                    <form action="" className='p-1'>
                        <input type="text" className='w-50' placeholder='Your name' />
                        <input type="text" className='w-50' placeholder='Your email' />
                        <br />
                        <input type="text" className='w-100' placeholder='Subject' />
                        <br />
                        <textarea name="message" className='w-100' id="" cols="30" rows="10" placeholder='Your message...'></textarea>
                        
                        <div style={{textAlign:"right"}}>
                        <input type="submit" className='btn btn-primary'  placeholder='Your name' />
                        </div>
                    </form>
                </div>

                <div className='col-lg border border-dark m-2 mapC' id=''>
               
                    <MapContainer className="markercluster-map" center={[43.69037,-79.78559]} zoom={12} maxZoom={11}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
                        
                        <Marker position={[43.69037,-79.78559]}>

                        </Marker>
                    </MapContainer>

                    
                </div>
            </div>
        </div>
    )
}


export default Contact