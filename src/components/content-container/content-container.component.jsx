import React,{useState, useEffect} from 'react';
import axios from 'axios';

import {ImagesContainer, Image, Grid, SmallerGrid, Pagation} from './content-container.styles';
import Spinner from '../spinner/spinner.component';

const ContentContainer = () => {
    const [pageImagesData, setImagesData] = useState({
        imagesData: [],
        onPage: 1,
        isLoading: true,
    });
    const {imagesData, onPage,  isLoading} = pageImagesData;
    const getImages = (pageNo) => {
        axios({
            url: `https://picsum.photos/v2/list?page=${pageNo}&limit=5`,
            method: 'get',
        }).then(response => {
            setImagesData({onPage: pageNo,imagesData: response.data,isLoading: false});
        }).catch(error => {
            console.log('Payment error: ', error);
            alert('There was an issue while fetching the images');
        });
    }
    
    const handlePrev = () => {
        if(onPage>1){
            setImagesData({...pageImagesData, isLoading: true})
            getImages(onPage-1);
        }
    }

    const handleNext = () => {
        setImagesData({...pageImagesData, isLoading: true})
        getImages(onPage+1);
    }


    useEffect(() => getImages(1), []);
    console.log(imagesData[0])
    return(
        <div>
            {
                isLoading ? 
                <Spinner /> :
                <ImagesContainer> 
                    <Grid>
                        <Image src={imagesData[0].download_url} alt="Someimage" width="65%" height="56em"/>
                        <SmallerGrid>
                            <Image src={imagesData[1].download_url} alt="Someimage" width="100%" height="27em"/>
                            <Image src={imagesData[2].download_url} alt="Someimage" width="100%" height="27em"/>
                        </SmallerGrid>
                    </Grid>
                    <Grid>
                        <Image src={imagesData[3].download_url} alt="Someimage" width="49%" height="40em"/>
                        <Image src={imagesData[4].download_url} alt="Someimage" width="49%" height="40em"/>
                    </Grid>
                </ImagesContainer>
            }
            <Pagation>
                {onPage===1 ? <p></p> : <p onClick={handlePrev}>Prev</p>}
                {onPage}
                <p onClick={handleNext}>Next</p>
            </Pagation>
        </div>
    )   
};

export default ContentContainer;