import React,{useState} from 'react';
import axios from 'axios';

import {ImagesContainer, Image, Grid, SmallerGrid, Pagation} from './images-container.styles';

const ImageContainer = () => {
    const [pageImages, setPageImages] = useState({
        imagesData: [],
        onPage: 1,
    });
    const {imagesData, onPage} = pageImages;
    const getImages = (pageNo) => {
        axios({
            url: `https://picsum.photos/v2/list?page=${pageNo}&limit=5`,
            method: 'get',
        }).then(async response => {
            await setPageImages({onPage: pageNo,imagesData: response.data})
        }).catch(error => {
            console.log('Payment error: ', error);
            alert('There was an issue while fetching the images');
        });
    }
    
    const handlePrev = () => {
        if(onPage>1){
            getImages(onPage-1);
        }
    }

    const handleNext = () => {
        getImages(onPage+1);
    }

    if(!Array.isArray(imagesData) || !imagesData.length){
        return(<p>isLoading....{getImages(1)}</p> )

    } else {
        return(
            <div>
                <ImagesContainer> 
                    <Grid>
                        <Image src={imagesData[0].download_url} alt="Someimage" width="70%" height="56em"/>
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
                <Pagation>
                    {onPage===1 ? <p></p> : <p onClick={handlePrev}>Prev</p>}
                    <p onClick={handleNext}>Next</p>
                </Pagation>
            </div>
        )
    }    
};

export default ImageContainer;