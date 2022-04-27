import {  Grid } from '@material-ui/core'
import React from 'react'
import Container from "@material-ui/core/Container"
import { Category } from '../Data'
import Categories from './Categories'

const CategoryItem = () => {
    return (
        <div>
           <Container >
           <Grid container >
            {
                Category.map((item,key)=>(
                    <Grid item md={4} xs={12} key={item.id} className='c.info' >
                    <Categories item={item} key={key} />
                  </Grid>
                ))
            }
            </Grid>
           </Container>
        </div>
    )
}

export default CategoryItem
