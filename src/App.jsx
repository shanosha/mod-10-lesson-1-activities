import Form from "./componenets/Form/Form"
import PostFetcher from "./componenets/PostFetcher/PostFetcher";

const sectionStyle = "bg-white p-4 shadow-xl rounded my-8";

function App() {

  return (
    <>
      <h1 className="text-gray-500 text-sm my-4">Mod 10 - Lesson 1 - Activities</h1>
      <section className={sectionStyle}>
        <Form />
      </section>
      <section className={sectionStyle}>
        <PostFetcher />
      </section>
      
    </>
  )
}

export default App
