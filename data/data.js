
let titleHost = "https://title-service-production.up.railway.app";
let memberHost = "https://member-service-production.up.railway.app";

let findAllTitles = () => {
    return (
        fetch(titleHost + "/titles")
            .then(response => response.json())
    )
}

let findAllMembers = () => {
    return (
        fetch(memberHost + "/members")
            .then(response => response.json())
    )
}

let reserveTitle = (title, memberId) => {
    return (
        fetch(titleHost + "/titles/" + title.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({
                reserveStatus: true,
                memberId: memberId
                }
            )}).then(response =>
            {
                if (response.status === 200 || response.status === 201 || response.status === 204) return true;
                return null;
            }))
}

let renewTitle = (title) => {
    return (
        fetch(titleHost + "/titles/renew/" + title.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response =>
        {
            if (response.status === 200 || response.status === 201 || response.status === 204) return true;
            return null;
        })
    )
}

let returnTitle = (title) => {
    return (
        fetch(titleHost + "/titles/" + title.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({
                    reserveStatus: false,
                    memberId: -1
                }
            )}).then(response =>
        {
            if (response.status === 200 || response.status === 201 || response.status === 204) return true;
            return null;
        }))
}

let findTitlesByMember = (member) => {
    return (
        fetch(titleHost + "/titles/members/" + member.id)
            .then(response => response.json())
    )
}

let data = {
    titles : findAllTitles,
    members : findAllMembers,
    reserve: reserveTitle,
    renew: renewTitle,
    return: returnTitle,
    titlesByMember: findTitlesByMember
}

export default data;