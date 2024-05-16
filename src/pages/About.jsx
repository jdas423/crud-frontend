

export default function About(){
    return(
  <div className="ins-wrapper max-w-[1280px] w-full flex justify-center items-center pt-[120px] pb-[50px]">
<div className="py-16 bg-white w-[90%]">  
  <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div className="md:5/12 lg:w-5/12">
          <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" width="" height=""/>
        </div>
        <div className="md:7/12 lg:w-6/12">
          <h2 className="text-[16px] text-black font-extrabold upercase">A website to record projects</h2>
          <p className="mt-6  font-medium text-[14px] text-green-variant">My name is Jagdish Das and I am a full stack developer. I have developed the frontend of this application using React and backend using fast Api of python. I have used MongoDB database to carry out all the creation,deletion and updation in this project. </p>
          <p className="mt-4 font-medium text-[14px] text-green-variant"> I have also implemented the signin and signup functionality in the application.  </p>
        </div>
      </div>
  </div>
</div>

  </div>
    )
}