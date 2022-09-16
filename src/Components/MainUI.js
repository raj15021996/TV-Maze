import React, { useEffect, useState } from 'react'
import Actors from './Actors'
import Shows from './Shows'
import SearchIcon from '@mui/icons-material/Search';

function MainUI() {

    const [input, setInput] = useState('')
    const [showData, setShowData] = useState([])
    const [actorData, setActorData] = useState([])
    const [select, setSelect] = useState('')
    const [view, setView] = useState(false);

    //fetch the API 
    useEffect(() => {
        if (select === 'actor') {
            fetch(`https://api.tvmaze.com/search/people?q=${input}`)
                .then(res => res.json())
                .then(result => {
                    setActorData(result);
                })
        } else {
            fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
                .then(res => res.json())
                .then(result => {
                    setShowData(result);
                    // console.log(result)
                })
        }
        //at the time of unmount set input section blank 
        return()=>{
            setActorData([]);
            setShowData([]);
        }
    }, [input])
    
    //know about selected radio button
    function selectRadioBtn(e){
        setInput("");
        setSelect(e.target.id)
        console.log(`select details: ${e.target.id}`)
    }
    return (    
        <React.Fragment>
        {/* this is a container where radio button and text input area present */}
            <div className='container'>       
                <div>
                    <p className='main-header'>TVmaze</p>
                    <p className='sub-header' >Search your favourite shows</p>
                </div>

                <div className='inputs'>
                    <div className='innerInput'>
                        <label for="actor">Actor
                            <input type="radio" id='actor' name='select' value="actor" className='radio-btn' onClick={selectRadioBtn}/>  
                        </label>

                        <label for="shows">Shows
                            <input type="radio" id='shows' name='select' value="show" className='radio-btn'onClick={selectRadioBtn}/><br />
                        </label>
                    </div>

                    <div id='displayText'>
                        {
                            (!select) ? view ? <p style={{ color: "red" }}>Please select first</p> : null
                                : (select === 'shows') ? <p>Enter Show's name below</p> : <p>Enter Actor's name below</p>
                        }
                    </div>

                    {
                        (select === 'shows') ?
                            <div className='main-input'>
                                <div className='inputField'>
                                    <SearchIcon />
                                    <input id='textInput' type='text' placeholder='eg: Friends' value={input} onChange={(e) => setInput(e.target.value)} onFocus={() => setView(true)} />
                                </div>
                            </div>
                            : <div className='main-input'>
                                <div className='inputField'>
                                    <SearchIcon />
                                    <input id='textInput' type='text' placeholder='eg: Akon' value={input} onChange={(e) => setInput(e.target.value)} onFocus={() => setView(true)} />
                                </div>
                            </div>
                    }
                </div>

                <div id='error' className='errorText'>
                    {/* {console.log(`select ${select}`)} */}
                    {
                        (!select) ? '' : (select === 'shows') ? (showData.length === 0 && input) && <p> No data found</p> : (actorData.length === 0 && input) && <p> No data found</p>
                    }
                </div>
            </div>
         {/* import Shows and Actors component  */}
            <div className='imgDiv'>
                {
                    (select === 'shows') ? <Shows data_show={showData} /> : <Actors data={actorData} />
                }
            </div>
        </React.Fragment>
    )
}
export default MainUI;