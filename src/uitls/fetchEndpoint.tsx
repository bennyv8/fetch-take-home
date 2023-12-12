const fetchEndpoint = async (path: string, method: string, body?: string) => {
  try {
    const res = await fetch(
      `https://frontend-take-home-service.fetch.com${path}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        method: method,
        body: body,
      },
    );
    return res.ok ? await res.json() : null;
  } catch (err) {
    console.error("invalid url, check endpoint", err);
    return err;
  }
};

export default fetchEndpoint;
