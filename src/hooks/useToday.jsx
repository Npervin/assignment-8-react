function useToday(availability) {
  const today = new Date();
  const dayName = today.toLocaleDateString("en-US", { weekday: "long" });

  return {
    dayName,
    isAvailable:
      availability.findIndex(
        (d) => d.toLowerCase() === dayName.toLowerCase()
      ) !== -1,
  };
}

export default useToday;
