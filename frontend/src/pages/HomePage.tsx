
const HomePage = () => {
  const userName = "joni";
  return (
    <div className="min-h-screen flex items-center justify-center bg-black-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <h1 className="text-3xl font-bold">
          {`Welcome ${userName}`}
        </h1>
        <p className="mt-4 text-gray-600">
          This is the home page of your application.
        </p>
        <p className="mt-4 text-gray-600">
          You can add your content here.
        </p>
      </div>
    </div>
  )}

export default HomePage