/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('movieApp.services',[]).factory('Movie',function($resource){
    
    return $resource('http://192.168.1.126:30002/api/contacts/:id',{id:'@mobilePhone'},{
        get: {
            method: 'GET',
            id:'@mobilePhone'
        }, update: {
            method: 'PUT',
            id:'@mobilePhone'
        }, save: {
            method: 'POST'
        }
    },{});
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
