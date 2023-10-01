import React, {useState, useEffect} from 'react'
import { client } from '../../client';
import './listen.css'

export default function Listen() {

  //const [isListenLoading, setIsListenLoading] = useState(false);
  const [listenContent, setListenContent] = useState({});


  const getListenContent = async ()=> {
    try{
        const response = await client.getEntries({content_type:'listen'})
        
        const image = response.items[0].fields.listen.fields.file.url + '?w=2604&h=2604';
        const alt = response.items[0].fields.listen.fields.title;
        console.log(image, alt)
        setListenContent({
            image: `https:${image}`,
            alt: alt
        })


    }
    catch(error){
        console.log(error) 
    }
}

useEffect(()=>{
    getListenContent()
},[])

  return (
    <div>
      <section
        id="listenSection"
      >
        <div
          className="listenContainer"
          data-testid="listenContent"
          style={{
            backgroundImage: `url(${listenContent.image})`
          }}
        >
            <div
              className="listenInnerContainer"
            >
              <p>
                <br></br>
                {/* Stay tuned for more musical content coming your way soon! */}
                <br></br>
                <br></br>
              </p>
            </div>
        </div>
      </section>
    </div>
  )
}