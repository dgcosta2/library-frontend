
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

let saveMember = (member) => {
    return fetch(memberHost + "/members", {
        method: 'POST',
        headers :{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: member.memberName,
            email: member.memberEmail
        })
    }).then (response =>
    {
        if(response.status >= 200 && response.status < 300) return true;
        else return null;
    })
}

let saveTitle = (title) => {
    return fetch(titleHost + "/titles", {
        method: 'POST',
        headers :{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: title.titleName,
            author: title.titleAuthor,
            yearOfPublication: title.titleYearOfPublication
        })
    }).then (response =>
    {
        if(response.status >= 200 && response.status < 300) return true;
        else return null;
    })
}

let removeTitle = (title) => {
    return fetch(titleHost + "/titles/" + title.id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application-json'
        }
    }).then(response =>
    {
        if(response.status >= 200 && response.status < 300) return true;
        else return null;
    })
}

let removeMember = (member) => {
    return fetch(memberHost + "/members/" + member.id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application-json'
        }
    }).then(response =>
    {
        if(response.status >= 200 && response.status < 300) return true;
        else return null;
    })
}

let data = {
    titles : findAllTitles,
    members : findAllMembers,
    reserve: reserveTitle,
    renew: renewTitle,
    return: returnTitle,
    addMember: saveMember,
    addTitle: saveTitle,
    removeTitle: removeTitle,
    removeMember: removeMember,
    titlesByMember: findTitlesByMember
}

export default data;