const getMessage = (req, res) => {
  try {
    res.json({ message: "success" });
  } catch (error) {
    res.json({ error: error.message });
  }
};

export default getMessage;
