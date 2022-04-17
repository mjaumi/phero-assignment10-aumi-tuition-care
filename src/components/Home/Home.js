import React from 'react';

const Home = () => {
    return (
        <section>
            <div
                id="carouselDarkVariant"
                className="carousel slide carousel-dark relative"
                data-bs-ride="carousel"
            >
                {/* <!-- Indicators --> */}
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="1"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="2"
                        aria-label="Slide 1"
                    ></button>
                </div>

                {/* <!-- Inner --> */}
                <div className="carousel-inner relative w-full overflow-hidden">
                    {/* <!-- Single item --> */}
                    <div className="carousel-item active relative float-left w-full">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp"
                            className="block w-full"
                            alt="Motorbike Smoke"
                        />
                        <div className="carousel-caption hidden md:block absolute top-1/2 text-center">
                            <h2 className="text-6xl">Looking For A Tutor For Your Beloved Child??</h2>
                            <p className="text-xl">In search of an experienced tutor for your class 9-12 kid??</p>
                        </div>
                    </div>

                    {/* <!-- Single item --> */}
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"
                            className="block w-full"
                            alt="Mountaintop"
                        />
                        <div className="carousel-caption hidden md:block absolute top-1/2 text-center">
                            <h2 className="text-6xl">Then I Am Here To Help You Out!!</h2>
                            <p className="text-xl">I am giving tuition of class 9-12 students!!</p>
                        </div>
                    </div>

                    {/* <!-- Single item --> */}
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp"
                            className="block w-full"
                            alt="Woman Reading a Book"
                        />
                        <div className="carousel-caption hidden md:block absolute top-1/2 text-center">
                            <h2 className="text-6xl">Third slide label</h2>
                            <p className="text-xl">Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Inner --> */}

                {/* <!-- Controls --> */}
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
};

export default Home;