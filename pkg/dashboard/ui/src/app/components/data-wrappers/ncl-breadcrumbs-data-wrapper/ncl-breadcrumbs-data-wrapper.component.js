(function () {
    'use strict';

    angular.module('nuclio.app')
        .component('nclBreadcrumbsDataWrapper', {
            templateUrl: 'data-wrappers/ncl-breadcrumbs-data-wrapper/ncl-breadcrumbs-data-wrapper.tpl.html',
            controller: NclBreadcrumbsDataWrapperController
        });

    function NclBreadcrumbsDataWrapperController(NuclioProjectsDataService, NuclioFunctionsDataService) {
        var ctrl = this;

        ctrl.getProjects = getProjects;
        ctrl.getFunctions = getFunctions;

        //
        // Public methods
        //

        /**
         * Gets a list of projects
         * @returns {Promise}
         */
        function getProjects() {
            return NuclioProjectsDataService.getProjects();
        }

        /**
         * Gets a list of functions
         * @param {string} id - project ID
         * @param {boolean} enrichApiGateways - determines whether to enrich functions with their related API gateways
         * @returns {Promise}
         */
        function getFunctions(id, enrichApiGateways) {
            return NuclioFunctionsDataService.getFunctions(id, enrichApiGateways);
        }
    }
}());
