// after looking at several sources, it seems like DFS is one of the (if not the original) methods for augmenting a path 
// in the Ford Fulkerson algorithm and other maximum flow problem algorithms

// sources:
// https://www.geeksforgeeks.org/ford-fulkerson-algorithm-for-maximum-flow-problem/
// https://en.wikipedia.org/wiki/Ford%E2%80%93Fulkerson_algorithm
// https://www.w3schools.com/dsa/dsa_algo_graphs_fordfulkerson.php

// adapted my DFS code from graph search for the new data structure

function augmentingPath(graph, start, end) 
{
    var visited = {}, order = [];
    if (graph === null || JSON.stringify(graph) === '{}')
    {
        return [];
    }
    for (var node in graph)
    {
        visited[node] = false;
    }
    
    var result = DFS(graph, start, end, visited, order);

    if (result == null)
    {
        return [];
    }
    else if (result.length === 0)
    {
        result.push(start);
        return result;
    }
    else
    {
        result.unshift(start);
        return result;
    }
}

function DFS(graph, currNode, targetNode, visited, order)
{
    visited[currNode] = true;
    
    if (currNode == targetNode)
    {
        return [];
    }

    var currNode = graph[currNode];
    for (var adjNode in currNode)
    {
        if (!visited[adjNode])
        {
            if (DFS(graph, adjNode, targetNode, visited, order) != null)
            {
                order.unshift(adjNode);
                return order;
            }
        }
    }
    return null;
}
