import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {
    const {loading, data} = useFetchGifs(category);
  return (
    <>
        <h3>{category}</h3>
        {loading && <p>Loading</p>}
        <div className='card-grid'>
                {
                    data.map((img) => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
        </div> 
    </>
  ) 
}
