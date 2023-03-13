import { fetchData, readFile } from "./lib";

// TOPIC: Type guards

// 1- Built-in types guards

// type FileData = string | number | boolean | null | Error;
const fileData = readFile();
//    ^?
if (typeof fileData === "string") {
  fileData;
  // ^?
} else if (typeof fileData === "number") {
  fileData;
} else if (typeof fileData === "boolean") {
  fileData;
} else if (typeof fileData === "object" && fileData == null) {
  fileData;
} else if (fileData instanceof Error) {
  fileData;
} else {
  fileData;
}

// 2- User defined type guards

type SuccessResponse = { data: string[]; msg: string };
type ErrorResponse = { error: string };
type ApiRespone = SuccessResponse | ErrorResponse;

const response: unknown = fetchData();
//    ^?

// TODO: check whether the response is success or error and then process it further

// 1- write validations

// 2- refactoring (extract validations to a function)
function isSuccessResponse(response: unknown): response is SuccessResponse {
  return (
    typeof response === "object" &&
    response != null &&
    "data" in response &&
    Array.isArray(response.data) &&
    "msg" in response &&
    typeof response.msg === "string"
  );
}

function assertsIsSuccessResponse(
  response: unknown
): asserts response is SuccessResponse {
  if (
    !(
      typeof response === "object" &&
      response != null &&
      "data" in response &&
      Array.isArray(response.data) &&
      "msg" in response &&
      typeof response.msg === "string"
    )
  ) {
    throw new Error("response is not successful");
  }
}

// if (isSuccessResponse(response)) {
//   response;
// }
// 3- using type guard "is" (positive test)
// 4- implementing assertion (negative test)
assertsIsSuccessResponse(response);
response;
