async function unreliableFunction() {
    if (Math.random() > 0.1) {
      return "Success!";
    } else {
      throw new Error("Random failure!");
    }
  }
  
  async function run() {
    try {
      const result = await retry(unreliableFunction, 5);
      console.log("Result:", result);
    } catch (error) {
      console.error("All attempts failed:", error);
    }
  }
  
  run();
  
  
  function retry(fn, times) {
  
  }
  