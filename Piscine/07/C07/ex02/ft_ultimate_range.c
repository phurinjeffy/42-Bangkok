/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_ultimate_range.c                                :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: pvanasri <pvanasri@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/24 17:28:44 by pvanasri          #+#    #+#             */
/*   Updated: 2023/06/26 16:03:50 by pvanasri         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <stdlib.h>

int	ft_size(int min, int max)
{
	int	size;

	size = 0;
	while (min < max)
	{
		size++;
		min++;
	}
	return (size);
}

int	ft_ultimate_range(int **range, int min, int max)
{
	int	*array;
	int	len;
	int	i;

	if (min < max)
	{
		len = ft_size(min, max);
		array = (int *)malloc(sizeof(int) * (len));
		if (array == NULL)
			return (-1);
		i = 0;
		while (i < len)
		{
			array[i] = min;
			min++;
			i++;
		}
		*range = array;
		return (len);
	}
	else
	{
		*range = NULL;
		return (0);
	}
}
