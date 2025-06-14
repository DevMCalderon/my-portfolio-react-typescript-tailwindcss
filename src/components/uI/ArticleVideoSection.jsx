const ArticleVideoSection = ({ labelledby, title, videoSrc, caption }) => (
  <section aria-labelledby={ labelledby } className="mb-4">
    <h4 id={ labelledby } className="text-start text-xl text-blue-300 mb-3">{ title }</h4>
    
    <hr className="hr1 text-indigo-400 lg:max-w-screen-2xl w-[20rem] mb-4"/>
    <div>
      <video autoPlay controls loop muted playsInline  className="rounded-xl mb-2 overflow-hidden" loading="lazy" preload="none" width="100%" height="auto">
        {/* <source src={projectData.videoPath} type="video/mp4" /> */}
        <source src={ videoSrc } type="video/mp4" />
        Tu navegador no soporta el elemento <code>video</code>.
      </video>
    </div>
    
    { caption &&
      <p className="bg-blue-950 rounded-2xl text-lgbase p-4 px-5 mb-9">{ caption }</p>
    }
  </section>
);

export default ArticleVideoSection;