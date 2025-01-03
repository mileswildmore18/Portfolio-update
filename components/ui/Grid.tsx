import React from 'react'
import { BentoGrid, BentoGridItem } from './BentoGrid'

const Grid = () => {
  return (
    // Add the Bento Grid and the items
    <section id="about">
        <BentoGrid>
            {/* Display the grid */}
            {[{title: 'Title1', description: 'Desc1', id:1}].map((item) => (
              <BentoGridItem 
                id={item.id}
                key={item.id}
                title={item.title}
                description={item.description}
              />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid