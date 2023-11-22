function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/view/member.html',
        controller: 'SkillsMemberControler',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}