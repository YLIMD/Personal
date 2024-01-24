import { useParams } from "react-router-dom";
import { projects } from "../Helpers/projectsList";
import BtnGitHub from "../Components/BtnGitHub";
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import "swiper/css"


const Project = () => {

    const {id} = useParams();   
    const project = projects[id];
    const imagesBig = project.imagesBig;
    const showSlider = imagesBig.length > 1;
    const showImage = imagesBig.length === 1;
    return ( <main className="section">
    <div className="container">
        <div className="row">
            
            <div className="  project-details">
                <h1 className="title-1">{project.title}</h1>
                { showSlider &&
                    <Swiper 
                        slidesPerView={1}
                        spaceBetween={50}
                        loop={true}
                        style={{width:"100%"}}>

                        <div className="  project-sliderBtn_left">
                            <SliderButton side="left"/>   
                        </div>

                        {imagesBig.map((imageBig,index)=>(

                            <SwiperSlide style={{width:"70%"}} key={index}>
                                <img src={imageBig} alt={project.title}className="project-details__cover"/>
                            </SwiperSlide>      
                        
                        ))}


                            <SliderButton side="right"/>   
                

                    </Swiper>
                }
                {
                    showImage && <img src={imagesBig[0]} alt={project.title}className="project-details__cover"/>
                }                
                <div className="project-details__skills">
                    <p> Used Skills: <em>{project.skills}</em></p>
                </div>
                <div className="project-details__desc">
                    <p>
                    {project.description}</p>
                </div>
                
            {project.gitHubLink &&(<BtnGitHub/>)}
            
            </div>
           
        </div>
    </div>
</main>
);

}
const SliderButton = (props)=>{
    const swiper = useSwiper();
    const nameForClass = "slideSwipeBtn_" + props.side;
    const displayLeft = props.side ==="right"? "none": "block";
    const displayRight = props.side ==="right"? "block": "none";
    const handleSwipe = ()=>{
        if(props.side === "right"){
            swiper.slideNext();
        }
        else{
            swiper.slidePrev();
        }

    }

    return (
        <div className="flexCenter r-buttons"
            style={{width:"100%",
                    zIndex: "3",
                    position:"absolute", top:"50%", 
                    transform:"translateY(-50%)"

            }}
        >
            <div className= {nameForClass}>
                <div className="projectBtnWrapper">
                    <button style={{}}
                         onClick={handleSwipe}>
                    <p style={{display:` ${displayLeft}`
                    }}>&lt;</p>
                    <p style={{display:` ${displayRight}` 
                    }}>&gt;</p>
                    <p></p>
                    </button>
                </div>
            </div>

        </div>
    )
}
export default Project;