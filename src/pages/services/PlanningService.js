export  class PlanningService {

  baseUrl = "http://localhost:8000/api/planning/";

  async getPlanningList() {
    const response = await fetch(this.baseUrl);
    return response.json();
  }

  async getPlanning(id) {
    const response = await fetch(this.baseUrl + `/planning/${id}/`);
    return response.json();
  }

  async getPlanningList(params) {
    const response = await fetch(this.baseUrl + `/planning/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    return response.json();
  }

  async createPlanning(data) {
    const response = await fetch(this.baseUrl + `/planning/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async updatePlanning(id, data) {
    const response = await fetch(this.baseUrl + `/planning/${id}/`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async deletePlanning(id) {
    const response = await fetch(this.baseUrl + `/planning/${id}/`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }
}