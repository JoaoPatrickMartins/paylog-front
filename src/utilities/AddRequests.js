export const AddRequests =(requests) => {
    var result = 0;

    requests.map((request) => (
          <>{result = result + (Number.parseFloat(request.value))}</>
    ))

    return result
}

