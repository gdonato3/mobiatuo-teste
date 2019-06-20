import {observable, decorate, action} from 'mobx'

class DataStore {
    mainData;
    isLoading;

    setData(data) {
        this.mainData = data;
    }

    checkLoading(status) {
        this.isLoading = status;
    }
}

decorate(DataStore, {
    mainData: observable,
    isLoading: observable,
    setData: action,
    checkLoading: action
  });

export default new DataStore;