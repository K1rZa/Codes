angular.module('beamng.apps').directive('driftSensor', [
	'$interval',
	function ($interval) {
		return {
			template: '<canvas width="300" height="165"></canvas>',
			replace: true,
			restrict: 'EA',
			link: function (scope, element, attrs, ctrl) {
				var streamsList = ['sensors', 'electrics', 'wheelInfo', 'stats']
				StreamsManager.add(streamsList)

				scope.$on('$destroy', function () {
					StreamsManager.remove(streamsList)
				})