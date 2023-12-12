import { useState, ChangeEvent } from "react";
import { Input } from "../../components/index";
import { fetchEndpoint } from "../../uitls";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    const res = await fetchEndpoint(
      "/auth/login",
      "POST",
      JSON.stringify(formData),
    );
    if (res === null) {
      console.log("handle invalid login if needed");
    } else {
      console.log("success");
      navigate("/search");
    }
  };

  return (
    <div>
      <div className="fixed h-screen w-screen bg-blue-100"></div>
      <div className="mx-auto my-8 flex max-w-lg translate-y-1/2 flex-col items-center bg-blue-500 p-6">
        <h1 className="mb-4 text-4xl font-bold">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name:
            </label>
            <Input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              required={true}
              className="w-full rounded-md border px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full rounded-md border px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <button
            type="submit"
            className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:border-blue-300 focus:outline-none focus:ring"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
