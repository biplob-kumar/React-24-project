import React from 'react'

const Country = (props) => {

    const { name, flags, capital, population, area } = props.country;

    const handleRemoveCountry = (name) => {
        props.onRemoveCountry(name);
      };

  return (
<article className='country '>
    <div>
        <img src= {flags.png} alt= {name.common} className='flag' />
        <h3> name:{name.common} </h3>
        <h3> population:{population} </h3>
        <h3> capital:{capital} </h3>
        <h3> area:{area} </h3>
        <button className='btn' onClick={() => {
            handleRemoveCountry(name.common);
          }} >
           Remove 
        </button>
    </div>
</article>
  )
}

export default Country