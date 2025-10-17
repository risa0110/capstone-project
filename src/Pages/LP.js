import BottleScene from "../Components/BottleScene";

export default function LP(){
    return(
        <>
            <header>
                <div className="logos">
                    <ul>
                        <li><img src="./img/instagram-logo.png" alt="instagram-icon"/></li>
                        <li><img src="./img/linked-in.png" alt="linkedin-icon"/></li>
                        <li><img src="./img/facebook-logo.png" alt="facebook-icon"/></li>
                        <li><img src="./img/x_logo.png" alt="twitter-icon"/></li>
                    </ul>
                </div>
                <div className="header-logo"><img src="./img/ayataka_logo_white.png" alt="site-logo"></img></div>
                <div>
                    <ul>
                        <li><button className="btn">CART</button></li>
                        <li><button className="btn">ORDER NOW</button></li>
                    </ul>
                </div>
            </header>
            <div id="side-btn">
                <button className="btn" style={{padding:"3rem 2.5rem"}}><h3>ORDER NOW!</h3></button>
            </div>
            <main>
                <BottleScene/>
                <section id="big-headline">
                    <h1>HIGH-QUALITY INGREDIENTS ALLOWING YOU TO ENJOY A CAFE-LIKE TASTE</h1>
                </section>
                <section className="section" id="product">
                    <div id="ingredients">
                        <h1>MATCYA LATE</h1>
                        <div>
                            <h4>INGREDIENTS</h4>
                            <h3>MILK, SUGAR, SKIM MILK POWDER, MATCHA, VEGETABLE OIL, 
                                DEXTRIN, SALT, EMULSIFIER, 
                                ANTIOXIDANT(VITAMIN C), FLAVORING, COLORING</h3>
                        </div>
                    </div>
                    <div id="box"></div>
                    <div>
                        <div>
                            <h2>An Elegant Matcha Experience from Kyoto.</h2>
                            <p style={{marginTop:"0.8rem"}}>This product is made with 100% domestically produced matcha carefully selected by a long-established tea shop in Uji, Kyoto.<br/>
                                The matcha is finely ground to a smoother texture and gently blended with milk.<br/>
                                After more than one hundred trails, we refinded the recipe to achieve a perfect balance between the gentle sweetness of milk and the rich aroma and elegant bitterness of match.<br/>
                                From the first sip to the finish, it offers a deeper, smoother, and more satisfying matcha Experience.
                            </p>
                        </div>
                        <div id="product-info">
                            <div>
                                <h4>ALCHOL</h4>
                                <h2>0%</h2>
                            </div>
                            <div>
                                <h4>VOLUME</h4>
                                <h2>280ml</h2>
                            </div>
                            <div>
                                <h4>STORAGE</h4>
                                <h2>3O℃</h2>
                            </div>
                            <div>
                                <h4>CALORIES</h4>
                                <h2>42kcal/100ml</h2>
                            </div>
                        </div>
                        <div><button className="btn">ORDER NOW</button></div>
                    </div>
                </section>
                <section id="about">
                    <section className="section" >
                        <h4>ABOUT AYATAKA-CAFE</h4>
                        <h1>WHERE TRADITION MEETS EVERYDAY COMFORT</h1>
                    </section>
                    <section>
                        <hr style={{paddingTop:"1rem"}}/>
                        <section id="brand-detail">
                            <div>
                                <img src="./img/star.png" alt="star"/>
                                <p>Born from the spirit of “making tea more free and more enjoyable,” Ayataka Café invites you to experience Japanese tea in a new, relaxed way.
                                In today’s busy world, cafés have become sanctuaries — places where we slow down, find comfort, and simply be ourselves.
                                From that inspiration, the Ayataka Café series was created to blend the time-honored artistry of tea with the ease and warmth of modern café culture.</p></div>
                            <div>
                                <img src="./img/star.png" alt="star"/>
                                <p>Each cup is crafted with 100% carefully selected Japanese matcha, finely ground and thoughtfully blended with milk for a smooth, balanced flavor.
                                Supervised by Kanbayashi Shunsho Honten, a 450-year-old tea house in Uji, Kyoto, and Sarutahiko Coffee, a specialty coffee roaster known for its craftsmanship,
                                Ayataka Café celebrates the harmony of tradition and innovation — offering an authentic yet modern taste that enriches every moment of your day.</p></div>
                        </section> 
                        <hr style={{paddingTop:"3rem"}}/>
                    </section>               
                </section>
            </main>
            <footer>
                <div style={{justifySelf:"center"}}><img src="./img/ayataka_logo_white.png" alt="ayataka_logo"/></div>
                <div>
                    <ul>
                        <li><p>2025 AYATOKA Fiction - ALL Rights Reserved</p></li>
                        <li><p>Cookies</p></li>
                        <li><p>Privacy Policy</p></li>
                        <li><p>Return Policy</p></li>
                        <li><p>General Condition</p></li>
                    </ul>
                </div>
            </footer>
            <div id="btm-logo-wrap">
                <div className="btm-logo">
                    <img src="./img/ayataka_logo2.png" alt="ayataka_logo2"/>
                    <p>AYATAKA CAFE<br/>
                    MATCHA LATE</p>
                </div>
                <div className="btm-logo">
                    <img src="./img/ayataka_logo2.png" alt="ayataka_logo2"/>
                    <p>AYATAKA CAFE<br/>
                    MATCHA LATE
                    </p>
                </div>
            </div>
        </>
    )
}