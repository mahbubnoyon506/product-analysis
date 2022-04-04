import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <div className='blogs-wrap'>
                <div className="contecx-api">
                    <h4>Context provides a way to pass data through the component tree without having to pass props down manually at every level.</h4>
                    <p>In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>
                </div>
                <div className="symentic-tag">
                    <h4>Semantic tags and uses of them:</h4>
                    <p>Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a "p" tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.
                        On the flip side of this equation, tags such as "b" and "i" are not semantic. They define only how the text should look (bold or italic), and don't provide any additional meaning to the markup.</p>
                </div>
            </div>
            <div className="block-element">
                <h4>Difference between Inline, Inline Block and Block elements are given:</h4>
                <p><span>Inline</span> The element doesn't start on a new line and only occupy just the width it requires. The width or height can't be setable.</p>
                <p><span>Inline-block</span> It's formatted just like the inline element, where it doesn't start on a new line. BUT width and height values are setable.</p>
                <p><span>Block</span> The element will start on a new line and occupy the full width available. And width and height values are setable.</p>
            </div>
        </div>


    );
};

export default Blogs;