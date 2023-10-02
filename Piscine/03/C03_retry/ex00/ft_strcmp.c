/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strcmp.c                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: pvanasri <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/13 21:35:55 by pvanasri          #+#    #+#             */
/*   Updated: 2023/06/14 00:12:07 by pvanasri         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <stdio.h>

int	ft_strcmp(char *s1, char *s2)
{	
	int	i;

	i = 0;
	while (s1[i] && s2[i] && s1[i] == s2[i])
	{
		++i;
	}
	return (s1[i] - s2[i]);
}

/*int	main(void)
{
	char* a = "ALEX";
	char* b = "ALEX";

	printf("%d", ft_strcmp(a, b));
}*/
