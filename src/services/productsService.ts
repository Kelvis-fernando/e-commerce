import axios from "axios";

export const productService = () => {
  const encodedParams = new URLSearchParams();
  encodedParams.append(
    "url",
    "https://storage.googleapis.com/api4ai-static/samples/fashion-1.jpg"
  );

  const options = {
    method: "POST",
    url: "https://fashion4.p.rapidapi.com/v1/results",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "ad1a634496mshcc6365583085806p15f9bdjsn07f41c943008",
      "X-RapidAPI-Host": "fashion4.p.rapidapi.com",
    },
    data: encodedParams,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
