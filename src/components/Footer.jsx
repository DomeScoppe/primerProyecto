import React from 'react'
import { ImFacebook, ImTwitter, ImLinkedin2, ImBehance } from 'react-icons/im';

const Footer = () => {


    return (
        <footer className='container mx-auto px-6'>
            <h3 className="pl-4 border-l-8 border-primary text-4xl capitalize text-complementary">Get notified about new amazing products</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quidem perspiciatis libero corrupti pariatur provident praesentium tenetur qui, eos nostrum nam hic ea enim mollitia temporibus rem quae molestias tempore!</p>
            <form action="">
                <input type="text" />
                <input type="submit" value="" />
            </form>
            <div>
                <div>
                    <ImFacebook />
                    <ImTwitter />
                    <ImLinkedin2 />
                    <ImBehance />
                </div>
                <div>
                    <p>
                        Copyright © <span>{new Date().getFullYear()}</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer