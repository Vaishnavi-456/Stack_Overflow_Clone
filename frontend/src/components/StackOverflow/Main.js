import React from 'react';
import {Link}  from 'react-router-dom';
import {FilterList} from '@mui/icons-material';
import AllQuestions from "./AllQuestions";
import './css/Main.css';
import Question from '../AddQuestion/Question';

function Main({questions}){
    return(
        <div className='main'>
          <div className='main-container'>
            <div className='main-top'>
              <h2>All Questions</h2>
              <button className='btn'><Link to="/addquestion">Ask Question</Link></button>
            </div>
            <div className='main-desc'>
              <p>{questions && questions.length} Questions</p>
              
            
            <div className='main-filter'>
              <div className='main-tabs'>
                <div className='main-tab'>
                  <Link>Newest</Link>
                </div>
                <div className='main-tab'>
                  <Link>Active</Link>
                </div>
                <div className='main-tab'>
                  <Link>More</Link>

                </div>

              </div>
              <div className='main-filter-item'>
                <FilterList />
                <p>Filter</p>

              </div>

            </div>
         </div>
         <div className=' questions'>
          {
            questions.map((_q,index) => (
              <>
               <div key={index} className='question'>
            <AllQuestions question = {_q} /> <hr></hr>
           
             
            </div> 
              
              
              </>

            ))
          }
         
            

         </div>

          </div>
          
        </div>

    );
}

export default Main;