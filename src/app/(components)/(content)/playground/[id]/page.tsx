import Chatbot from "../Chatbot";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  
  return (
    <div className="h-full">
        <Chatbot id={id}/>
    </div>
  );
};

export default page;
