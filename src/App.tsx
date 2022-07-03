import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { readService } from "./services/useCases/servicesUseCases/readServiceUseCase";
import { readTypeService } from "./services/useCases/typeServicesUseCases/readServiceUseCase";
import { CreateService, Service } from "./models/service";
import { TypeService } from "./models/type";
import Card from "./ui/Card";
import ItemNav from "./ui/ItemNav";
import Input from "./ui/Input";

function App() {
  const [services, setServices] = useState<Array<Service>>([]);
  const [typeServices, setTypeServices] = useState<Array<TypeService>>([]);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
  const [copyServices, setCopyservices] = useState<Array<Service>>([]);
  const [newService, setNewService] = useState<Service>({
    id: "",
    name: "",
    description: "",
    type: "",
  });

  /** Function to create a new service */
  function addService({ name, description, type }: CreateService) {
    const getLength = services.length;

    const createdService: Service = {
      id: (Number(getLength) + 1).toString(),
      name: name?.toString() || "",
      description: description?.toString() || "",
      type: type?.toString() || "",
    };

    setServices((prev) => [...prev, createdService]);
    setCopyservices((prev) => [...prev, createdService]);
    setNewService({
      id: "",
      name: "",
      description: "",
      type: "",
    });
  }
  /** Function to Filter of type services */
  function filterService(filterService: String) {
    if (filterService === "0") {
      setCopyservices(services);
    } else {
      setCopyservices(
        services.filter((service) => service.type === filterService)
      );
    }
  }

  /** functions to clear Inptus services*/
  function clear() {
    setNewService({
      id: "",
      name: "",
      description: "",
      type: "",
    });
    setIsUpdate(false);
  }

  /** Get Data to type Service*/
  async function getData() {
    const getServices = await readService();
    const getTypes = await readTypeService();
    if (getServices) {
      setServices(getServices);
      setCopyservices(getServices);
    }
    if (getTypes) {
      setTypeServices(getTypes);
    }
  }

  /** Call Service to get Data*/
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2 className="title  m-3">Servicios</h2>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"></li>
              <li className="nav-item">
                <span
                  className="btn btn-light"
                  aria-current="page"
                  onClick={() => {
                    filterService("0");
                  }}
                >
                  Todos
                </span>
              </li>
              {typeServices?.map((type) => {
                return (
                  <ItemNav
                    FilterFunction={() => {
                      filterService(type.id);
                    }}
                    id={type.id}
                    name={type.name}
                    key={type.id}
                  />
                );
              }) || []}
            </ul>
          </div>
        </div>
      </nav>
      <div className="row w-100 px-4">
        <div className="col-md-8 col-sm-12">
          <div className="row">
            {copyServices?.map((service) => {
              return (
                <Card
                  DeleteFunction={() => {
                    const newArray = services.filter(
                      (item) => item.id !== service.id
                    );
                    setServices(newArray);
                    setCopyservices(newArray);
                  }}
                  key={service.id}
                  EditFunction={() => {
                    setNewService({
                      id: service.id,
                      name: service.name,
                      description: service.description,
                      type: service.type,
                    });
                    setIsUpdate(true);
                    setId(service.id);
                  }}
                  description={service?.description || ""}
                  id={service.id}
                  name={service.name}
                />
              );
            }) || []}
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="border my-2 rounded">
            <fieldset>
              <div className="p-3">
                <legend>Servicio</legend>
                <Input
                  label="Nombre"
                  name={newService.name}
                  onChange={(event) => {
                    setNewService((prevState) => {
                      return {
                        ...prevState,
                        name: event.target.value,
                      };
                    });
                  }}
                />
                <Input
                  label="Descripción"
                  name={newService?.description || ""}
                  onChange={(event) => {
                    setNewService((prevState) => {
                      return {
                        ...prevState,
                        description: event.target.value,
                      };
                    });
                  }}
                />
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Tipo de servicio
                  </label>
                  <select
                    className="form-select"
                    value={newService.type}
                    onChange={(e) => {
                      setNewService((prev) => {
                        return {
                          ...prev,
                          type: e.target.value,
                        };
                      });
                    }}
                  >
                    <option value="0">Selecione</option>
                    {typeServices.map((i) => {
                      return (
                        <option key={i.id} value={i.id}>
                          {i.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="d-flex gap-1 card-footer">
                <button
                  className="btn btn-outline-success"
                  onClick={(e) => {
                    const filter: Service = services.filter(
                      (i) => i.id === id
                    )[0];

                    const newArray =
                      services.map((i) => {
                        return i.id === filter?.id
                          ? {
                              id: filter.id,
                              name: newService.name,
                              description: newService.description,
                              type: newService.type,
                            }
                          : i;
                      }) || {};

                    {
                      isUpdate
                        ? (setServices(newArray), setCopyservices(newArray))
                        : addService({
                            name: newService.name,
                            description: newService.description || "",
                            type: newService.type,
                          });
                    }
                  }}
                >
                  {isUpdate ? "Grabar" : "Crear"}
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    clear();
                  }}
                >
                  Cancelar
                </button>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
