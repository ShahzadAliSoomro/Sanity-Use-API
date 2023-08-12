// schemas/pet.js

import person from "./person";

 const pet = {
    name: 'pet',
    type: 'document',
      title: 'Pet',
    fields: [
      { 
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        title: 'Genre',
        name: 'genre',
        type: 'string',
        options: {
          list: [
            {title: 'Sci-Fi', value: 'sci-fi'},
            {title: 'Western', value: 'western'}
          ], // <-- predefined values
          layout: 'dropdown' // <-- defaults to 'dropdown'
        },
        
      },
      {
        title: 'Release date',
        name: 'releaseDate',
        type: 'date',
        options: {
          dateFormat: 'YYYY-MM-DD',
          calendarTodayLabel: 'Today'
        }
      },{
        title: 'Manuscript',
        name: 'manuscript',
        type: 'file',
        fields: [
          {
            name: 'description',
            type: 'string',
            title: 'Description'
          },
          {
            name: 'author',
            type: 'reference',
            title: 'Author',
            to: {type:'person'}
          }
        ]
      }
      
    ]
  }
  export default pet;