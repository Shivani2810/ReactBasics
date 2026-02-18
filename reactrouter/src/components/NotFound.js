import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {

  const navigate = useNavigate(); // ✅ call the hook

  function clickHandler(){
    navigate('/support');
  }

  return (
    <div>
      <div>NotFound</div>

      <div>
        <button onClick={clickHandler}>
          Move to Support
        </button>
      </div>
    </div>
  );
}
