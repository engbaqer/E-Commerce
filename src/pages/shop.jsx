import React from 'react'
import Hero from "../components/hero/hero"
import Populer from '../components/popular/popular'
import Newcollections from '../components/newcollaction/new_collections'
function shop() {
  return (<>
    <div><Hero /></div>
    <div><Populer /></div>
    <div><Newcollections /></div>
    </>
    )
}

export default shop