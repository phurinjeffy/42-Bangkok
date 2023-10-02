/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strncmp.c                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: pvanasri <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/14 00:12:38 by pvanasri          #+#    #+#             */
/*   Updated: 2023/06/14 16:15:27 by pvanasri         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

int	ft_strlen(char *str)
{
	int	i;

	i = 0;
	while (str[i] != '\0')
	{
		++i;
	}
	return (i);
}

int	ft_strncmp(char *s1, char *s2, unsigned int n)
{
	unsigned int	i;
	unsigned int	s1_len;
	unsigned int	s2_len;

	s1_len = ft_strlen(s1);
	s2_len = ft_strlen(s2);
	i = 0;
	while (s1[i] && s2[i] && s1[i] == s2[i] && n - 1)
	{
		++i;
		--n;
	}
	if (n == 0)
	{
		return (0);
	}
	return (s1[i] - s2[i]);
}
