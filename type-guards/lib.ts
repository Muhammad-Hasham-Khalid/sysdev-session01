type FileData = string | number | boolean | null | Error;

export function fetchData(): any {
  if (Math.random() > 0.5) {
    const successResponse = {
      data: ["circle", "square"],
      msg: "all shapes fetched successfully",
    };
    return successResponse;
  } else {
    const errorResponse = { error: "something went wrong" };
    return errorResponse;
  }
}

export function readFile(): FileData {
  const data = new Error("something went wrong");
  return data;
}
