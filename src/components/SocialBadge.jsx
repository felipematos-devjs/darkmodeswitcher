//component for social badges
//they are links to the social media websites

export const SocialBadge = (props) =>{
    
    return (
    <>
        <a href={props.link}><img src={props.badgesrc} alt="" className="social-badge"/></a>
    </>)
}