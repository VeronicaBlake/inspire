import ImagesController from "./Controllers/ImagesController.js";
import TodosController from "./Controllers/TodosController.js";
import QuotesController from "./Controllers/QuotesController.js";

class App {
  todosController = new TodosController();
  imagesController = new ImagesController(); 
  quotesController = new QuotesController()

}

window["app"] = new App();
