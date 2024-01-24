import React from 'react';
import Header from '../Components/Header';

const Home = () => {
   return( <div>
   <Header></Header>
       <main class="section">
        <div class="container">

                <ul class="content-list">
                    <li class="content-list__item">
                        <h2 class="title-2">My Backend Skills</h2>
                        <p>C#, .Net Core, ASP.NET MVC, Razor Pages, Web API, EntityFramework </p>
                        <p>MySql, MS SQL, Indentity, xUnit, SignalR, WPF, WinForms</p>
                    </li>
                    <li class="content-list__item">
                        <h2 class="title-2">My Frontend Skills</h2>
                        <p>JavaScript,  React, HTML, CSS / SCSS, Blazor, BootStrap</p>
                    </li>
                    
                </ul>

        </div>
    </main>
    </div>
   );
}
 
export default Home;