function binary_search(arr, elem)
    left = 1
    right = length(arr)

    while left <= right
        mid = (left + right) ÷ 2
        if arr[mid] == elem
            return mid
        elseif arr[mid] < elem
            left = mid + 1
        else
            right = mid - 1
        end
    end

    return -1
end

arr = [1, 2, 3, 4, 5, 6, 7, 8]
println(binary_search(arr, 8))  
