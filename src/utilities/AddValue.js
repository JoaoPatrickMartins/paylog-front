export const AddValue =(vets) => {
    var result = 0;

    vets.map((vet) => (
          <>{result = result + (Number.parseFloat(vet.value))}</>
    ))

    return result
}

