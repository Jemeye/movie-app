import React, { useEffect, useState } from 'react';
import CategoryCard from './category-card';
import { firebaseService } from '../service/firebase';

const Home: React.FC = () => {

    const [categories, setCategories] = useState<Array<Category>>([]);

    interface Category{
        name: string
        img: string
        endPoint: string
    }

    useEffect (() => {
        const api = firebaseService();
        api.getCategoryData().then((data) => {
            setCategories(data)
        }).catch((err)=>console.error(err))
    }, [])

    return (
        <div className='category-container'>
            <h2>Categories</h2>
            <div className='category-grid'>
                {categories.map((category: Category, index : number) => (
                    <CategoryCard key={index} name={category.name} image={category.img} endpoint={category.endPoint}/>
                ))}
            </div>
        </div>
    )
}

export default Home
