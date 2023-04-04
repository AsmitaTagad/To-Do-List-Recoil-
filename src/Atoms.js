import {atom} from 'recoil'


export const myAtom=atom({
  key:'myAtom',
  default:[
    {
      id:1,
      name:'Meditation'
    },
    {
      id:2,
      name:'Revision'
    }
  ]
})

